import z from 'zod'

type input = {
    url: string,
    element: string,
    file: string
}

const userPromptSchema = z.object({
    url: z.string().url({message: 'invalid url'}).startsWith('https://', {message: "Must provide secure url -E.g. https://secureweb.com"}),
    element: z.string(),
    file: z.string().refine((s)=> !s.includes(" "), 'Wrong file name')
})

export function validateUserPromptSchema(input:input) {
    return userPromptSchema.safeParse(input)
}