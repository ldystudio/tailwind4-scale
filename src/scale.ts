/**
 * 将设计稿像素值转换为等比缩放的 CSS calc() 表达式
 *
 * @param value - 设计稿像素值
 * @param unit - 自定义 CSS 变量名
 * @returns CSS calc() 表达式
 *
 * @example
 * // 基本用法
 * scale(100)  // "calc(100 * var(--tw-scale))"
 * scale(-20)  // "calc(-20 * var(--tw-scale))"
 * scale(0)    // "0"
 *
 * // 在 React 内联样式中使用
 * <div style={{ width: scale(100), padding: scale(16) }} />
 *
 * // 自定义变量名
 * scale(100, "--my-scale")  // "calc(100 * var(--my-scale))"
 */
export function scale(value: number, unit: string = "--tw-scale"): string {
	if (value === 0) return "0";
	return `calc(${value} * var(${unit}))`;
}
