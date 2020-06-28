interface Response {
    auth: boolean
    success: boolean
}
export interface IdeasResponse extends Response{
    data: Idea[]
}

export interface IdeaResponse extends Response{
    data: Idea
}

export interface Content {
    description: string
    src: string
}
export interface Comment {
    "_id": string
    comment: string
}
export interface Addition {
    "_id": string
    category: string
    content: Content
    comments: Comment[]
}

export interface Idea {
    "_id": string
    title: string
    summary: string
    additioncount: number
    additions?: Addition[]
    votecount: number
    upvotes: string[]
    downvotes: string[]
    owner?: string
    yourvote: number
    updated: string
    created: string
    badge: number
    position: number
}

export const fetchIdea = async (id: string) => {
    const r = await fetch(`http://localhost:8080/api/idea/${id}`)
    const final: IdeaResponse = await r.json()
    return final
}

export const fetchIdeas = async () => {
    const r = await fetch(`http://localhost:8080/api/ideas`)
    const final: IdeasResponse = await r.json()
    return final
}
