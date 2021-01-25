import LoveButton from "../components/LoveButton";

export default {
  title: "Vuetify/LoveButton",
  component: LoveButton
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LoveButton },
  template: '<love-button :love-text="loveText" :alert-type="alertType"/>'
});

export const LoveYou = Template.bind({});
LoveYou.args = {
  loveText: "LoveYou",
  alertType: "success"
};

export const LoveMe = Template.bind({});
LoveMe.args = {
  loveText: "LoveMe",
  alertType: "error"
};
