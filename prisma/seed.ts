import { PrismaClient, ShiftType, UserRole } from '@prisma/client'

import { timeToMinutes } from '../lib/timeUtils'

import { readCsv } from '../lib/csv'
import { upsertLocationTree } from '../domain/location/upsertLocationTree'

console.log('USING upsertLocationTree FROM:', __filename)


const prisma = new PrismaClient()

async function main() { 
  /*
    * ============================
    * 1. OvertimeRateCategory
    * ============================
    */
  const rateCategories = [
    { code: 'NORMAL_125', name: '通常超勤(125%)', rate: 1.25, color: '#3b82f6' },
    { code: 'NIGHT_150',  name: '深夜超勤(150%)', rate: 1.50, color: '#1d4ed8' },
    { code: 'HOLIDAY_135', name: '休日超勤(135%)', rate: 1.35, color: '#ef4444' },
    { code: 'H_NIGHT_160', name: '休日深夜(160%)', rate: 1.60, color: '#b91c1c' },
  ]

  for (const rate of rateCategories) {
    await prisma.overtimeRateCategory.upsert({
      where: { code: rate.code },
      update: rate,
      create: rate,
    })
  }

  const savedRates = await prisma.overtimeRateCategory.findMany()
  const getRateId = (code: string) => savedRates.find(r => r.code === code)?.id

  /*
   * ============================
   * 2. Team & Shift (新規追加)
   * ============================
   */
  // 消防の隔日勤務（1部・2部）と日勤を定義
  const WorkShiftData = [
    { code: 'T1', name: '第1担当', shiftType: ShiftType.DUTY_24H },
    { code: 'T2', name: '第2担当', shiftType: ShiftType.DUTY_24H },
    { code: 'TD', name: '日勤', shiftType: ShiftType.DAY_SHIFT },
  ]

  for (const workShift of WorkShiftData) {
    await prisma.workShift.upsert({
      where: { code: workShift.code },
      update: workShift,
      create: workShift,
    })
  }
  const WorkShifts = await prisma.workShift.findMany()
  const getWorkShiftId = (code: string) => WorkShifts.find(w => w.code === code)!.id
  /*
   * ============================
   * Department
   * ============================
   */
const deptData = [
  { code: 'Ha1', name: '本署' },
  { code: 'Ha2', name: '北部出張所' },
  { code: 'Ha3', name: '成岩出張所' },
  { code: 'Ag1', name: '阿久比支署' },
  { code: 'Ta1', name: '武豊支署' },
  { code: 'Hi1', name: '東浦支署' },
  { code: 'Hi2', name: '東浦西部出張所' },
  { code: 'G1', name: '総務課' },
  { code: 'G2', name: '予防課' },
]

await prisma.department.createMany({
  data: deptData,
  skipDuplicates: true,
})

  const Departments = await prisma.department.findMany()
  const getDeptId = (code: string) => Departments.find(d => d.code === code)!.id

  const t1Id = getWorkShiftId('T1')
  const t2Id = getWorkShiftId('T2')
  const tdId = getWorkShiftId('TD')

  const Ha1 = getDeptId('Ha1')
  const Ha2 = getDeptId('Ha2')
  const Ha3 = getDeptId('Ha3')
  const Ag1 = getDeptId('Ag1')
  const Ta1 = getDeptId('Ta1')
  const Hi1 = getDeptId('Hi1')
  const Hi2 = getDeptId('Hi2')
  const G1 = getDeptId('G1')
  const G2 = getDeptId('G2')

const teamData = [
  { code: '本署1', name: '本署第1課', workShiftId: t1Id, departmentId: Ha1 },
  { code: '本署2', name: '本署第2課', workShiftId: t2Id, departmentId: Ha1 },
  { code: '阿久比1', name: '阿久比支署第1担当', workShiftId: t1Id, departmentId: Ag1 },
  { code: '阿久比2', name: '阿久比支署第2担当', workShiftId: t2Id, departmentId: Ag1 },
  { code: '武豊1', name: '武豊支署第1担当', workShiftId: t1Id, departmentId: Ta1 },
  { code: '武豊2', name: '武豊支署第2担当', workShiftId: t2Id, departmentId: Ta1 },
  { code: '東浦1', name: '東浦支署第1担当', workShiftId: t1Id, departmentId: Hi1 },
  { code: '東浦2', name: '東浦支署第2担当', workShiftId: t2Id, departmentId: Hi1 },
  { code: '成岩1', name: '成岩出張所第1担当', workShiftId: t1Id, departmentId: Ha3 },
  { code: '成岩2', name: '成岩出張所第2担当', workShiftId: t2Id, departmentId: Ha3 },
  { code: '北部1', name: '北部出張所第1担当', workShiftId: t1Id, departmentId: Ha2 },
  { code: '北部2', name: '北部出張所第2担当', workShiftId: t2Id, departmentId: Ha2 },
  { code: '東浦西部1', name: '東浦西部出張所第1担当', workShiftId: t1Id, departmentId: Hi2 },
  { code: '東浦西部2', name: '東浦西部出張所第2担当', workShiftId: t2Id, departmentId: Hi2 },
  { code: '総務', name: '総務課', workShiftId: tdId, departmentId: G1},
  { code: '予防', name: '予防課', workShiftId: tdId, departmentId: G2},
]

  const teams = await prisma.team.createMany({
    data: teamData.map(t=>({
      ...t,
      isActive: true
    })),
    skipDuplicates: true,
  })

  /*
   * ============================
   * Vehicle (車両データ)
   * ============================
   */

  const vehicleData = [
    // 本署 (Ha1)
    { code: '半1', name: '半田1号車', departmentId: Ha1 },
    { code: '半2', name: '半田2号車', departmentId: Ha1 },
    { code: '半3', name: '半田3号車', departmentId: Ha1 },
    { code: '半31', name: '半田31号車', departmentId: Ha1 },
    { code: '半41', name: '半田41号車', departmentId: Ha1 },
    { code: '半51', name: '半田51号車', departmentId: Ha1 },
    { code: '半53', name: '半田53号車', departmentId: Ha1 },
    { code: '半61', name: '半田61号車', departmentId: Ha1 },
    { code: '半62', name: '半田61号車', departmentId: Ha1 },
    { code: '半63', name: '半田61号車', departmentId: Ha1 },
    { code: '半71', name: '半田71号車', departmentId: Ha1 },
    { code: '救半1', name: '救急半田1号車', departmentId: Ha1 },
    { code: '救半2', name: '救急半田2号車', departmentId: Ha1 },
    { code: '救半3', name: '救急半田3号車', departmentId: Ha1 },

    // 阿久比支署 (Ag1)
    { code: '阿1', name: '阿久比1号車', departmentId: Ag1 },
    { code: '阿2', name: '阿久比2号車', departmentId: Ag1 },
    { code: '阿3', name: '阿久比3号車', departmentId: Ag1 },
    { code: '阿31', name: '阿久比31号車', departmentId: Ag1 },
    { code: '阿61', name: '阿久比61号車', departmentId: Ag1 },
    { code: '救阿1', name: '救急阿久比1号車', departmentId: Ag1 },

    // 武豊支署 (Ta1)
    { code: '武1', name: '武豊1号車', departmentId: Ta1 },
    { code: '武2', name: '武豊2号車', departmentId: Ta1 },
    { code: '武3', name: '武豊3号車', departmentId: Ta1 },
    { code: '武31', name: '武豊31号車', departmentId: Ta1 },
    { code: '武61', name: '武豊61号車', departmentId: Ta1 },
    { code: '救武1', name: '救急武豊1号車', departmentId: Ta1 },

    // 東浦支署 (Hi1)
    { code: '東1', name: '東浦1号車', departmentId: Hi1 },
    { code: '東2', name: '東浦2号車', departmentId: Hi1 },
    { code: '東3', name: '東浦3号車', departmentId: Hi1 },
    { code: '東31', name: '東浦31号車', departmentId: Hi1 },
    { code: '東61', name: '東浦61号車', departmentId: Hi1 },
    { code: '救東1', name: '救急東浦1号車', departmentId: Hi1 },

    // 成岩出張所(Ha3)
    {code: '成1', name: '成岩1号車', departmentId: Ha3},
    {code: '成3', name: '成岩3号車', departmentId: Ha3},
    {code: '半7', name: '半田7号車', departmentId: Ha3},
    {code: '半8', name: '半田8号車', departmentId: Ha3},
    {code: '救成1', name: '救急成岩1号車', departmentId: Ha3},

    // 北部出張所(Ha2)
    {code: '北1', name: '北部1号車', departmentId: Ha2},
    {code: '北3', name: '北部3号車', departmentId: Ha2},
    {code: '救北1', name: '救急北部1号車', departmentId: Ha2},

    // 東浦西部出張所(Hi2)
    {code: '西1', name: '東浦西部1号車', departmentId: Hi2},
    {code: '西3', name: '東浦西部1車', departmentId: Hi2},
    {code: '救西1', name: '救急東浦西部1号車', departmentId: Hi2},
  ];

  await prisma.vehicle.createMany({
    data: vehicleData.map(v => ({
      ...v,
      isActive: true,
    })),
    skipDuplicates: true,
  });

  console.log(`${vehicleData.length} vehicles have been seeded.`);

  /*
   * ============================
   * Location
   * ============================
   */
    const handa = readCsv<{
      municipality: string
      town: string
    }>('./prisma/seed_data/handa.csv')
  
    for (const row of handa) {
      await upsertLocationTree(row)
    }
  
    const agui = readCsv<{
      municipality: string
      oaza: string
      aza: string
    }>('./prisma/seed_data/agui.csv')
  
    for (const row of agui) {
      await upsertLocationTree(row)
    }

    const taketoyo = readCsv<{
      municipality: string
      oaza: string
      aza: string
    }>('./prisma/seed_data/taketoyo.csv')
  
    for (const row of taketoyo) {
      await upsertLocationTree(row)
    }

    const higashiura = readCsv<{
      municipality: string
      oaza: string
      aza: string
    }>('./prisma/seed_data/higashiura.csv')
  
    for (const row of higashiura) {
      await upsertLocationTree(row)
    }

  /*
   * ============================
   * WorkGroup
   * ============================
   */
  await prisma.workGroup.createMany({
    data: [
      { code: 'S1', name: '1番起' },
      { code: 'S2', name: '2番起' },
      { code: 'S3', name: '3番起' },
      { code: 'S4', name: '4番起' },
      { code: 'H1', name: '週休' },
      { code: 'H2', name: '非番' },
      { code: 'D1', name: '日勤'},
      { code: 'D2', name: '夜勤'},
    ],
    skipDuplicates: true,
  })

  const workGroups = await prisma.workGroup.findMany()

  /*
   * ============================
   * overTimeSlot
   * ============================
   */

  const overTimeSlotDefinitions: Record<string, { startMinute: number; endMinute: number; rateCode: string }[]> = {
    S1: [
      { startMinute: timeToMinutes('24:00'), endMinute: timeToMinutes('29:00'), rateCode: 'NIGHT_150' },
      { startMinute: timeToMinutes('29:00'), endMinute: timeToMinutes('30:45'), rateCode: 'NORMAL_125' },
      { startMinute: timeToMinutes('32:30'), endMinute: timeToMinutes('46:00'), rateCode: 'NORMAL_125' },
      { startMinute: timeToMinutes('46:00'), endMinute: timeToMinutes('48:00'), rateCode: 'NIGHT_150' },
    ],
    S2: [
      { startMinute: timeToMinutes('22:00'), endMinute: timeToMinutes('24:00'), rateCode: 'NIGHT_150' },
      { startMinute: timeToMinutes('26:00'), endMinute: timeToMinutes('29:00'), rateCode: 'NIGHT_150' },
      { startMinute: timeToMinutes('29:00'), endMinute: timeToMinutes('30:45'), rateCode: 'NORMAL_125' },
      { startMinute: timeToMinutes('32:30'), endMinute: timeToMinutes('46:00'), rateCode: 'NORMAL_125' },
      { startMinute: timeToMinutes('46:00'), endMinute: timeToMinutes('48:00'), rateCode: 'NIGHT_150' },
    ],
    S3: [
      { startMinute: timeToMinutes('22:00'), endMinute: timeToMinutes('26:00'), rateCode: 'NIGHT_150' },
      { startMinute: timeToMinutes('28:00'), endMinute: timeToMinutes('29:00'), rateCode: 'NIGHT_150' },
      { startMinute: timeToMinutes('29:00'), endMinute: timeToMinutes('30:45'), rateCode: 'NORMAL_125' },
      { startMinute: timeToMinutes('32:30'), endMinute: timeToMinutes('46:00'), rateCode: 'NORMAL_125' },
      { startMinute: timeToMinutes('46:00'), endMinute: timeToMinutes('48:00'), rateCode: 'NIGHT_150' },
    ],
    S4: [
      { startMinute: timeToMinutes('21:15'), endMinute: timeToMinutes('22:00'), rateCode: 'NORMAL_125' },
      { startMinute: timeToMinutes('22:00'), endMinute: timeToMinutes('28:00'), rateCode: 'NIGHT_150' },
      { startMinute: timeToMinutes('32:30'), endMinute: timeToMinutes('46:00'), rateCode: 'NORMAL_125' },
      { startMinute: timeToMinutes('46:00'), endMinute: timeToMinutes('48:00'), rateCode: 'NIGHT_150' },
    ],
    H1: [
      { startMinute: timeToMinutes('00:00'), endMinute: timeToMinutes('5:00'),rateCode: 'NIGHT_160' },
      { startMinute: timeToMinutes('05:00'), endMinute: timeToMinutes('22:00'),rateCode: 'NORMAL_135' },
      { startMinute: timeToMinutes('22:00'), endMinute: timeToMinutes('29:00'), rateCode: 'NIGHT_160' },
      { startMinute: timeToMinutes('29:00'), endMinute: timeToMinutes('46:00'),rateCode: 'NORMAL_135' },
      { startMinute: timeToMinutes('46:00'), endMinute: timeToMinutes('48:00'),rateCode: 'NIGHT_160' },
    ],
    H2: [
      { startMinute: timeToMinutes('00:00'), endMinute: timeToMinutes('5:00'),rateCode: 'NIGHT_150' },
      { startMinute: timeToMinutes('05:00'), endMinute: timeToMinutes('22:00'),rateCode: 'NORMAL_125' },
      { startMinute: timeToMinutes('22:00'), endMinute: timeToMinutes('29:00'), rateCode: 'NIGHT_150' },
      { startMinute: timeToMinutes('29:00'), endMinute: timeToMinutes('46:00'),rateCode: 'NORMAL_125' },
      { startMinute: timeToMinutes('46:00'), endMinute: timeToMinutes('48:00'),rateCode: 'NIGHT_150' },
    ],
    D1: [
      { startMinute: timeToMinutes('00:00'), endMinute: timeToMinutes('5:00'),rateCode: 'NIGHT_150' },
      { startMinute: timeToMinutes('05:00'), endMinute: timeToMinutes('8:30'),rateCode: 'NORMAL_125' },
      { startMinute: timeToMinutes('22:00'), endMinute: timeToMinutes('29:00'), rateCode: 'NIGHT_150' },
      { startMinute: timeToMinutes('29:00'), endMinute: timeToMinutes('46:00'),rateCode: 'NORMAL_125' },
      { startMinute: timeToMinutes('46:00'), endMinute: timeToMinutes('48:00'),rateCode: 'NIGHT_150' },
    ],
}

for (const group of workGroups) {
  const slots = overTimeSlotDefinitions[group.code];

  if (!slots) continue; // 未定義グループはスキップ
    await prisma.overtimeSlot.createMany({
      data: slots.map(slot => ({
        workGroupId: group.id,
        startMinute: slot.startMinute,
        endMinute: slot.endMinute,
      })),
      skipDuplicates: true,
    })
  } 

  /*
   * ============================
   * Staff
   * ============================
   */

// 日本人らしい姓・名の候補
const lastNames = [
    '佐藤', '鈴木', '高橋', '田中', '伊藤',
    '渡辺', '山本', '中村', '小林', '加藤',
    '吉田', '山田', '佐々木', '山口', '松本',
    '榊原', '竹内', '石川', '関川', '小坂',
  ]
  
  const firstNames = [
    '太郎', '次郎', '三郎', '健一', '翔太',
    '大輔', '悠斗', '拓也', '直樹', '誠',
    '花子', '美咲', '彩香', '由美', '奈々',
    '愛', '優子', '真由', '結衣', '陽菜',
    '健', '太一', '勘太郎', '富成', '喜一',
  ]
  
  // ランダムで名前を作る
  function randomJapaneseName(): string {
    const last = lastNames[Math.floor(Math.random() * lastNames.length)]
    const first = firstNames[Math.floor(Math.random() * firstNames.length)]
    return `${last} ${first}`
  }
  
  // 部署取得をまとめる
  const mock_teams = await prisma.team.findMany()
  
  // 念のため null ガード
  if (mock_teams.length === 0) {
    throw new Error('Department が見つかりません')
  }
  
  const staffData: {
    staffNo: string
    name: string
    teamId: number
  }[] = []
  
  let globalIndex = 1
  
  for (const team of mock_teams) {
    for (let i = 1; i <= 15; i++) {
      staffData.push({
        // 例: Ha1-001, Ha1-002 ...
        staffNo: String(8000+globalIndex),
        name: randomJapaneseName(),
        teamId: team.id,
      })
      globalIndex++
    }
  }
  
  await prisma.staff.createMany({
    data: staffData,
    skipDuplicates: true,
  })
  
  /*
   * ============================
   * User（NextAuth + Role）
   * ============================
   */
  const staffAdmin = await prisma.staff.upsert({
    where: { staffNo: 'ADMIN-001' },
    update: {},
    create: {
      staffNo: 'ADMIN-001',
      name: '管理者 太郎',
      teamId: mock_teams[0].id,
    },
  })
  
  const staffApprover = await prisma.staff.upsert({
    where: { staffNo: 'APPROVER-001' },
    update: {},
    create: {
      staffNo: 'APPROVER-001',
      name: '承認者 太郎',
      teamId: mock_teams[1].id,
    },
  })
  const staffGeneral = await prisma.staff.upsert({
    where: { staffNo: 'GENERAL-001' },
    update: {},
    create: {
      staffNo: 'GENERAL-001',
      name: '一般 太郎',
      teamId: mock_teams[2].id,
    },
  })

  await prisma.user.createMany({
    data: [
      {
        loginId: 'admin',
        name: '管理者 太郎',
        role: UserRole.ADMINISTRATOR,
        staffId: staffAdmin!.id,
      },
      {
        loginId: 'approver',
        name: '承認者 太郎',
        role: UserRole.APPROVER,
        staffId: staffApprover!.id,
      },
      {
        loginId: 'general',
        name: '一般 太郎',
        role: UserRole.GENERAL,
        staffId: staffGeneral!.id,
      },
    ],
    skipDuplicates: true,
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
