import z from 'zod'

type input = {
    url: string,
    element: string,
    file: string
}

const userPromptSchema = z.object({
    url: z.string().url({message: 'invalid url'}).startsWith('https://', {message: "Must provide secure url -E.g. https://secureweb.com"}),
    element: z.string().min(1, {message: 'empty field'}),
    file: z.string().min(1, {message: 'file name must have 1 character or more'}).refine((s)=> !s.includes(" "), 'Wrong file name')
})

export function validateUserPromptSchema(input:input) {
    return userPromptSchema.safeParse(input)
}