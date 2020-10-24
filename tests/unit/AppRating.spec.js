import AppRating from '@/components/AppRating.vue';
import { shallowMount } from '@vue/test-utils';

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(AppRating, {
    propsData: {
      maxStars: 5,
      activeStars: 2,
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});


describe('AppRating', () => {

  it('renders the stars', () => {
    const stars = wrapper.findAll('.star');
    expect(stars.length).toBe(5);
  })

  it('renders the active stars', () => {
    const activeStars = wrapper.findAll('.icon-star');
    expect(activeStars.length).toBe(2);
  })

  it('renders the rating summary', () => {
    const summary = wrapper.find('.rating__summary');
    expect(summary.text()).toEqual("2 of 5");
  })
});