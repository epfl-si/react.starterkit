
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/lists/:_id', {
  name: 'Lists.show',
  action(params, queryParams) {
    console.log("Looking at a list?");
  }
});
