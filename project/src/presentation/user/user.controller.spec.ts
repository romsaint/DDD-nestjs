import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { EventEmitter2 } from '@nestjs/event-emitter';

describe('UserController', () => {
  let controller: UserController;
  let eventEmitter: EventEmitter2;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: EventEmitter2,
          useValue: {
            emitAsync: jest.fn(), // Мокаем метод emitAsync
          },
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    eventEmitter = module.get<EventEmitter2>(EventEmitter2);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getUserById', () => {
    it('should return user by id', async () => {
      const id = 1;
      const mockUser = { id, name: 'John Doe' };

      (eventEmitter.emitAsync as jest.Mock).mockResolvedValue([mockUser]);

      expect(await controller.getUserById(id)).toEqual(mockUser);

      expect(eventEmitter.emitAsync).toHaveBeenCalledWith('user.getById', id);
    });
  });

  describe('getAll', () => {
    it('should return all users', async () => {
      const mockUsers = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
      ];

      (eventEmitter.emitAsync as jest.Mock).mockResolvedValue([mockUsers]);

      const result = await controller.getAll();

      expect(result).toEqual(mockUsers);
      expect(eventEmitter.emitAsync).toHaveBeenCalledWith('user.getAll');
    });
  });
});