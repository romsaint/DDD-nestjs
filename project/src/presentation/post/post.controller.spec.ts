import { PostController } from "./post.controller"
import { Test, TestingModule } from "@nestjs/testing"
import { EventEmitter2 } from "@nestjs/event-emitter"
import { PostEntity } from "src/domain/post/entities/post.entity"
import { User } from "@User"

describe('PostController', () => {
    let controller: PostController
    let eventEmitter: EventEmitter2

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PostController],
            providers: [
                {
                    provide: EventEmitter2,
                    useValue: {
                        emitAsync: jest.fn()
                    }
                }
            ]
        }).compile()

        controller = module.get<PostController>(PostController)
        eventEmitter = module.get<EventEmitter2>(EventEmitter2)
    })

    describe('getPosts', () => {
        it('should return posts', async () => {
            const res: PostEntity[] = [
                {
                    createdAt: new Date(Date.now()),
                    text: '43',
                    user_id: 12,
                },
            ];

            // Мокаем emitAsync для возврата массива постов
            (eventEmitter.emitAsync as jest.Mock).mockResolvedValue([res]);

            const result = await controller.getPosts();

            // Проверяем, что результат равен res
            expect(result).toEqual(res);
            expect(eventEmitter.emitAsync).toHaveBeenCalledWith('post.getPosts');
        });

        it('should return null if no posts are found', async () => {
            // Мокаем emitAsync для возврата null
            (eventEmitter.emitAsync as jest.Mock).mockResolvedValue([null]);

            const result = await controller.getPosts();

            // Проверяем, что результат равен null
            expect(result).toBeNull();
            expect(eventEmitter.emitAsync).toHaveBeenCalledWith('post.getPosts');
        });
    });

    
    describe('create-test', () => {
        it('should return posts', async () => {
            const res: PostEntity = {
                text: 'Hello',
                user_id: 123,
                createdAt: new Date(),
              };
   
            (eventEmitter.emitAsync as jest.Mock).mockResolvedValue([res]);

            expect(await controller.createPost()).toEqual(res);
            expect(eventEmitter.emitAsync).toHaveBeenCalledWith('post.createTestPost');
        });

        it('should return null if no posts are found', async () => {
            // Мокаем emitAsync для возврата null
            (eventEmitter.emitAsync as jest.Mock).mockResolvedValue([null])

            expect(await controller.createPost()).toBeNull();
            expect(eventEmitter.emitAsync).toHaveBeenCalledWith('post.createTestPost');
        });
    })
})