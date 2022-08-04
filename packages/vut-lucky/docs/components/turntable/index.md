# 大转盘抽奖

+ 以大转盘形式进行抽奖。

## 何时使用

+ 当需要使用大转盘进行抽奖时。

## 基本用法

:::demo Turntable 示例

```vue

<template>
  <div>
    <vt-turntable style="margin-bottom: 20px" header="这是标题">
      我们终将远行，和过去稚嫩的自己告别。这是一个流行告别的时代，陪你颠沛流离的人越来越少，直至没有。
      我们也要习惯昔日好友的渐行渐远，因为我们终将长大，长大到可以独自一人抵挡风雨。
    </vt-turntable>

    <vt-turntable shadow="hover" style="margin-bottom: 20px" header="这是标题 hover">
      我们终将远行，和过去稚嫩的自己告别。这是一个流行告别的时代，陪你颠沛流离的人越来越少，直至没有。
      我们也要习惯昔日好友的渐行渐远，因为我们终将长大，长大到可以独自一人抵挡风雨。
    </vt-turntable>

    <vt-turntable shadow="never" style="margin-bottom: 20px" header="这是标题 never">
      我们终将远行，和过去稚嫩的自己告别。这是一个流行告别的时代，陪你颠沛流离的人越来越少，直至没有。
      我们也要习惯昔日好友的渐行渐远，因为我们终将长大，长大到可以独自一人抵挡风雨。
    </vt-turntable>
  </div>

</template>

<script>
export default {
  name: 'turntableBox'
};
</script>

<style lang="scss" scoped>
</style>
```

:::

## turntable

turntable 参数

| 参数 | 类型 | 默认 | 说明 |
| ---- | ---- | ---- | ---- |
| header | string |  —    | 卡片的标题 可以通过设置 header 来修改标题，也可以通过 slot#header 传入 DOM 节点 |
| body-style |object| '{ padding: '20px' }'| body 的样式  |
| shadow | string | always | 设置阴影显示时机 always / hover / never  |