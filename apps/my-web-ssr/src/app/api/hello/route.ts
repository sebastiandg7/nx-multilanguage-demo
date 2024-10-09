import * as _ from 'lodash';

export async function GET(request: Request) {
  return new Response(_.join(['Hello,', 'from API!'], ' '));
}
