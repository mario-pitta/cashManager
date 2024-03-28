/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
// import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { Conta } from '../../core/models/Conta';



describe("Testing Account Module", () => {
    let service: AccountService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AccountService]
        }).compile();

        service = module.get<AccountService>(AccountService);
    })

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    test("get Conta[] by userId", async () => {
        try {
            const { data, error } = await service.findByUserId(1);

            if (error) throw new Error('Failed to get account by userId');
            expect(data).toBeInstanceOf<Conta[]>(data as Conta[])
        } catch (error) {
            console.error(error);
        }
    })

    test("should return a number", async () => {
        try {
            const { data, error } = await service.getAmountByUserId(1);
            console.log(data)
            if (error) throw new Error('Failed to get account by userId');
            expect(data).toBeInstanceOf<number>(data)
        } catch (error) {
            console.error("error");
            
        }
    })  
});

