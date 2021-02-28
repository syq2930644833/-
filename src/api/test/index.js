import request from '@/utils/request'

export function fetchList({page,limit}) {
    return request({
        url: `/v1/test/findArticle?page=${page}&limit=${limit}`,
        method: 'get',
    })
}

export function createArticle(params) {
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