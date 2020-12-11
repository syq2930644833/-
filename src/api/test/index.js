import request from '@/utils/request'

export function fetchList() {
    return request({
      url: '/v1/test/findArticle',
      method: 'get',
    })
  }