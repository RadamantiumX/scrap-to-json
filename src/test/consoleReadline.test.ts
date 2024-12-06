import { describe, expect, it } from "vitest";
import { consoleReadLine } from "../lib/consoleReadline";

describe('consoleReadLine', ()=>{
    it('should be return undefined when validation fail', ()=>{
        expect(consoleReadLine('','all')).toBeTypeOf('object')
    })
})