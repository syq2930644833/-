import request from '@/utils/request'
const qianniId = '603b8ab587e6243530a64df7'
const id = '603b8b3887e6243530a64df8'
export function fetchList({page,limit}) {
    return request({
        url: `/v1/test/findArticle?user_id=${id}&page=${page}&limit=${limit}`,
        // url: `/v1/test/findArticle?user_id=${qianniId}&page=${page}&limit=${limit}`,
        method: 'get',
    })
}

export function createArticle(params) {
    params.user_id = id
    // params.user_id = qianniId
    return request({
        url: '/v1/test/createArticle',
        method: 'post',
        data: params
    })
}

export function findArticlebyId(id) {
    return request({
        url: `/v1/test/findArticlebyId?id=${id}`,
        method: 'get'
    })
}
export function upload(id) {
    let url = `/v1/test/upload`
    return url
}