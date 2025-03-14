export type Item = {
  id: string; // 唯一标识符
  name: string; // 项目名称
  define?: string; // 定义或描述（可选）
  type?: "note" | "warning"; // 类型（可选）
  children?: Item[]; // 子项目（可选）
};
