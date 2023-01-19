import dayjs from 'dayjs';

const localizedFormat = require('dayjs/plugin/localizedFormat');

dayjs.extend(localizedFormat);

export default function formatDate(string) {
  return dayjs(string.replaceAll('-', '/')).format('LL');
}
