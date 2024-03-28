/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { BankService } from './banks.service';
import  {IBanco} from '../../core/models/Conta';

describe("test banks", () => {
    let service: BankService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [BankService]
        }).compile();

        service = module.get<BankService>(BankService);
    })

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    test("get all banks from DB", async () => {
        try {
            const { data, error } = await service.getAll();

            if (error) throw new Error('Failed to get account by userId');
            expect(data).toBeInstanceOf<IBanco[]>(data as IBanco[])
        } catch (error) {
            console.error(error);
        }
    })

    // test("should return a number", async () => {
    //     try {
    //         const { data, error } = await service.getAmountByUserId(1);
    //         console.log(data)
    //         if (error) throw new Error('Failed to get account by userId');
    //         expect(data).toBeInstanceOf<number>(data)
    //     } catch (error) {
    //         console.error("error");
            
    //     }
    // })  
});
