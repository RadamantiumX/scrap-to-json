import z from 'zod'
/**
 * Type for `zod` schema and validate the user propmpt on console
 */
type input = {
    url: string,
    element: string,
    file: string
}

// Zod schema to valite, with the prompt use values from the console
const userPromptSchema = z.object({
    url: z.string().url({message: 'invalid url'}).startsWith('https://', {message: "Must provide secure url -E.g. https://secureweb.com"}),
    element: z.string().min(1, {message: 'empty field'}),
    file: z.string().min(1, {message: 'file name must have 1 character or more'}).refine((s)=> !s.includes(" "), 'Wrong file name')
})
/**
 * 
 * @param input - object - all values provides to `z` object
 * @returns success | error with `message`
 */
export function validateUserPromptSchema(input:input) {
    return userPromptSchema.safeParse(input)
}