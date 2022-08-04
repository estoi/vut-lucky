// 引入测试相关依赖
import { shallowMount } from '@vue/test-utils';
import { expect, test, it } from 'vitest';

// 引入 card
import { Turntable } from '../index';
import { useNamespace } from '../../shared/hooks/use-namespace';

const ns = useNamespace('turntable');

// 创建测试
test('mount component', () => {
  // 创建一个包装后的测试组件
  const wrapper = shallowMount(Turntable, {
    props: {
      shadow: 'hover'
    }
  });

  //  测试组件是否生成成功 
  it('Turntable demo has created successfully', async () => {
    expect(wrapper).toBeTruthy();
  });

  // 测试组件是否有 .vut-lucky-turntable 属性的元素
  it('Turntable should have content', () => {
    const container = wrapper.find(ns.b());
    expect(container.exists()).toBeTruthy();
  });

  it('Turntable should have header', () => {
    const container = wrapper.find(ns.m('header'));
    expect(container.exists()).toBeTruthy();
  });
});