//MiContador.nuxt.test.ts
import {render, fireEvent, screen} from '@testing-library/vue'
import MiContador from '../../components/MiContador.vue'
import { describe, test } from "vitest";
describe('MiContador.vue', () => {
    test('increments value on click', async () => {
        // carga el componente
        render(MiContador)
        // screen define las consultas sobre el DOM
        // getByText devuelve el primer nodo de resultado para el texto pasado y,
        // tira un error si el elemento no incluye el texto.
        screen.getByText('Count is: 0')
        const button = screen.getByText('Add 1')
        // Lanza un evento click sobre el botón.
        await fireEvent.click(button)
        await fireEvent.click(button)
        screen.getByText('Count is: 2')
    })
})
