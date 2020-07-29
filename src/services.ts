interface Response {
    auth: boolean
    success: boolean
}
export interface IdeasResponse extends Response {
    data: Idea[]
}

export interface IdeaResponse extends Response {
    data: Idea
}

export interface ChallengesResponse extends Response {
    data: Challenge[]
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

export interface Paragraph {
    "_id": string
    title: string
    text: string
    sequence: number
}

export interface Challenge {
    "_id": string,
    title: string,
    leader: {
        image: string,
        video: {
            type: string,
            source: string,
            text: string
        }
    },
    paragraphs: Paragraph[]
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

export const fetchChallenges = async () => {
    const r = await fetch(`https://ideeen.codefor.nl/api/challenges`)
    const final: ChallengesResponse = await r.json()
    return final
}

export const fetchIdea = async (id: string) => {
    const r = await fetch(`https://ideeen.codefor.nl/api/idea/${id}`)
    const final: IdeaResponse = await r.json()
    return final
}

export const fetchIdeas = async () => {
    const r = await fetch(`https://ideeen.codefor.nl/api/ideas`)
    const final: IdeasResponse = await r.json()
    return final
}
