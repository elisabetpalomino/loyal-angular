/*
Ventajas typescript sobre javascript
- Tipado
- O.O.P
- Herencia/Interfaces/Clases abstractas
*/

/*
PROGRAMACIÓN ORIENTADA A OBJETOS
- Polimorfismo
- Herencia
- Encapsulamiento
- Abstracción
*/

// CLASES ------------------------------

export class Articulo {
    constructor(private id: number, private titulo: string) { }
}

export abstract class Buscador {    //???? new Buscador()??
    private clave: string;
    private resultados: Articulo[];
    constructor() {

    }
    public abstract buscar(): void; //Si no se especifica, se asume que es de tipo any
}

export class BuscadorPorTitulo extends Buscador implements IOrdenable<Articulo> {

    ordenar(elemntos: Articulo[]): void { }

    public buscar(): void { }
}


// INTERFACES ------------------------------
export interface Ordenable {
    ordenar(elementos: string[]): void;
}

export interface IOrdenable<T> {
    ordenar(elemntos: T[]): void;
}

export class OrdenASC implements IOrdenable<number> {
    ordenar(elemntos: number[]): void { }
}

export class OrdenObjetos implements IOrdenable<string> {
    ordenar(elemntos: string[]): void { }
}


//TypeScript: let,const
const buscadpor: BuscadorPorTitulo = new BuscadorPorTitulo();//instancia de un objeto de la clase BuscadorPorTitulo

buscadpor.buscar();

buscadpor.ordenar([]);