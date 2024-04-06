// Model.test.ts
import {render, fireEvent, screen} from '@testing-library/vue'
import Model from '../../components/Model.vue'
import { test, describe } from 'vitest';
describe ("test model", () => {
    test('properly handles v-model', async () => {
        render(Model)
        // Comprobamos el estado inicial.
        screen.getByText('Hi, my name is Alice')
        // Pillamos del DOM con una REGEX el elemento
        const usernameInput = screen.getByLabelText(/username/i)
        // Actualizamos el valor del <input> y disparamos el evento `input`.
        await fireEvent.update(usernameInput, 'Bob')
        screen.getByText('Hi, my name is Bob')
    })
})
