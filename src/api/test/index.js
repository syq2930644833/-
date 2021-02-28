import request from '@/utils/request'

export function fetchList({page,limit}) {
    return request({
        url: `/v1/test/findArticle?user_id=603b8b3887e6243530a64df8&page=${page}&limit=${limit}`,
        method: 'get',
    })
}

export function createArticle(params) {
    params.user_id = '603b8b3887e6243530a64df8'
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