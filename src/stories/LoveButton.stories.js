import LoveButton from "../components/LoveButton";

export default {
  title: "Vuetify/LoveButton",
  component: LoveButton
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LoveButton },
  template: '<love-button :love="loveText" />'
});

export const LoveYou = Template.bind({});
LoveYou.args = {
  loveText: "LoveYou"
};
