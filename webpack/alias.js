const path = require('path');

module.exports = {
  Common: path.resolve(__dirname, '../src/common/'),
	Components: path.resolve(__dirname, '../src/common/components/'),
	Containers: path.resolve(__dirname, '../src/common/containers/'),
	Client: path.resolve(__dirname, '../src/client/'),
	Server: path.resolve(__dirname, '../src/server/'),
	Configs: path.resolve(__dirname, '../src/configs'),
	Utils: path.resolve(__dirname, '../src/utils/'),
	Reducers: path.resolve(__dirname, '../src/common/reducers/'),
  Actions: path.resolve(__dirname, '../src/common/actions/'),
  Layouts: path.resolve(__dirname, '../src/common/layouts/'),
  Ui: path.resolve(__dirname, '../src/common/components/Ui'),
  Services: path.resolve(__dirname, '../src/common/services')
};
