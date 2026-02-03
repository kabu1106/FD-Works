export const getStaffPhotoUrl = (photoKey: string | null) => {
  if (!photoKey) return "/static/common/no-image.png"; // public内のデフォルト
  return `${process.env.STORAGE_URL}/${photoKey}`; // 本番(S3等)
};