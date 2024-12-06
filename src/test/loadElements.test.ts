import { describe, expect, it } from "vitest";
import { loadElements } from "../lib/loadElements";

describe('loadElements', ()=>{
    it('should be return object', ()=>{
        expect(loadElements('https://www.w3schools.com/', 'a', 'fileName','all')).toBeTypeOf('object')
    })
})