import { shallowMount } from '@vue/test-utils';
import ContentFooter from '../../../src/components/global/ContentFooter';

describe('<content-footer/>', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(ContentFooter);
    expect(wrapper.find('strong').text())
      .toEqual('Welcome to Your Vue.js App');
  });
});