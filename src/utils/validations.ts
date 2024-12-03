import z from 'zod'

type input = {
    file_name: string
}

const fileSchema = z.object({
    file_name: z.string().refine((s)=>!s.includes(" "), 'Please do not add spaces')
})

export function validateFileName(input:input) {
    return fileSchema.safeParse(input)
}