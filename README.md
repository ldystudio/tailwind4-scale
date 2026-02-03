# tailwind4-scale

Tailwind CSS v4 移动端适配工具类库，基于设计稿像素的等比缩放方案。

## 安装

```bash
npm install -D tailwind4-scale
# 或
bun add -D tailwind4-scale
# 或
pnpm add -D tailwind4-scale
```

## 使用方式

在你的 CSS 入口文件中引入：

```css
@import "tailwindcss";
@import "tailwind4-scale";
```

## 工具类说明

所有工具类使用 `-s-` 后缀，数字对应设计稿像素值：

| 类名                          | CSS 属性       | 示例                       |
| ----------------------------- | -------------- | -------------------------- |
| `w-s-{n}`                     | width          | `w-s-100` → 100 设计稿像素 |
| `h-s-{n}`                     | height         | `h-s-50`                   |
| `min-w-s-{n}`                 | min-width      | `min-w-s-200`              |
| `max-w-s-{n}`                 | max-width      | `max-w-s-375`              |
| `min-h-s-{n}`                 | min-height     | `min-h-s-100`              |
| `max-h-s-{n}`                 | max-height     | `max-h-s-812`              |
| `size-s-{n}`                  | width + height | `size-s-44`                |
| `p-s-{n}`                     | padding        | `p-s-16`                   |
| `px-s-{n}`                    | padding-inline | `px-s-20`                  |
| `py-s-{n}`                    | padding-block  | `py-s-12`                  |
| `pt/pr/pb/pl-s-{n}`           | padding-*      | `pt-s-10`                  |
| `m-s-{n}`                     | margin         | `m-s-8`                    |
| `mx-s-{n}`                    | margin-inline  | `mx-s-auto`                |
| `my-s-{n}`                    | margin-block   | `my-s-16`                  |
| `mt/mr/mb/ml-s-{n}`           | margin-*       | `mt-s-20`                  |
| `gap-s-{n}`                   | gap            | `gap-s-12`                 |
| `gap-x-s-{n}`                 | column-gap     | `gap-x-s-8`                |
| `gap-y-s-{n}`                 | row-gap        | `gap-y-s-16`               |
| `top/right/bottom/left-s-{n}` | 定位           | `top-s-44`                 |
| `inset-s-{n}`                 | inset          | `inset-s-0`                |
| `inset-x-s-{n}`               | left + right   | `inset-x-s-16`             |
| `inset-y-s-{n}`               | top + bottom   | `inset-y-s-0`              |
| `rounded-s-{n}`               | border-radius  | `rounded-s-8`              |
| `text-s-{n}`                  | font-size      | `text-s-14`                |
| `leading-s-{n}`               | line-height    | `leading-s-20`             |
| `border-s-{n}`                | border-width   | `border-s-1`               |
| `basis-s-{n}`                 | flex-basis     | `basis-s-100`              |
| `tracking-s-{n}`              | letter-spacing | `tracking-s-1`             |
| `indent-s-{n}`                | text-indent    | `indent-s-32`              |
| `translate-x/y-s-{n}`         | translate      | `translate-x-s-10`         |
| `scroll-m-s-{n}`              | scroll-margin  | `scroll-m-s-16`            |
| `scroll-p-s-{n}`              | scroll-padding | `scroll-p-s-20`            |

### 负值支持

支持负值的属性可使用 `-` 前缀：

```html
<div class="-mt-s-10 -translate-x-s-20">
  负外边距和负平移
</div>
```

## 原理

- `--scale: 0.0625rem` 定义了 1 设计稿像素 = 1/16 rem
- 配合 viewport.css 中的 `font-size: 4.26667vw`（100vw / 375 * 16）
- 实现设计稿像素到实际像素的等比映射

| 设计稿宽度 | 视口宽度 | 1rem    | w-s-100 实际宽度 |
| ---------- | -------- | ------- | ---------------- |
| 375px      | 375px    | 16px    | 100px            |
| 375px      | 750px    | 32px    | 200px            |
| 375px      | 320px    | 13.65px | 85.3px           |

## 自定义配置

通过 CSS 变量自定义缩放比例和视口字体大小：

```css
@import "tailwindcss";
@import "tailwind4-scale";

:root {
  /* 缩放比例，默认：0.0625rem（1/16 rem） */
  --tw-scale: 0.05rem;

  /* 视口字体大小，默认：4.26667vw（100vw / 375 * 16） */
  --tw-viewport-font-size: 4.1026vw; /* 基于 390px 设计稿 */

  /* 限制最大/最小字体大小 */
  --tw-viewport-font-size-min: 12px;  /* 默认：13.653px */
  --tw-viewport-font-size-max: 24px;  /* 默认：32px */
}
```

### 常用设计稿尺寸参考

| 设计稿宽度 | `--tw-viewport-font-size` 计算公式 | 值          |
| ---------- | ---------------------------------- | ----------- |
| 375px      | 100vw / 375 * 16                   | `4.26667vw` |
| 390px      | 100vw / 390 * 16                   | `4.1026vw`  |
| 414px      | 100vw / 414 * 16                   | `3.8647vw`  |
| 750px (2x) | 100vw / 750 * 16                   | `2.1333vw`  |

## 许可证

MIT
