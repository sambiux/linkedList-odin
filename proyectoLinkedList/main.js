function crearNodo(value = null, nextNode = null) {
    return {
        value,
        nextNode
    };
}


function crearListaEnlazada() {
    let head = null;

  
    function append(value) {
        const nuevoNodo = crearNodo(value);
        if (!head) {
            head = nuevoNodo;
            return;
        }
        let actual = head;
        while (actual.nextNode) {
            actual = actual.nextNode;
        }
        actual.nextNode = nuevoNodo;
    }

    function prepend(value) {
        const nuevoNodo = crearNodo(value, head);
        head = nuevoNodo;
    }

   
    function size() {
        let contador = 0;
        let actual = head;
        while (actual) {
            contador++;
            actual = actual.nextNode;
        }
        return contador;
    }

    
    function getHead() {
        return head;
    }

    
    function tail() {
        if (!head) return null;
        let actual = head;
        while (actual.nextNode) {
            actual = actual.nextNode;
        }
        return actual;
    }

 
    function at(index) {
        let actual = head;
        let i = 0;
        while (actual && i < index) {
            actual = actual.nextNode;
            i++;
        }
        return actual || null;
    }

    function pop() {
        if (!head) return;
        if (!head.nextNode) {
            head = null;
            return;
        }
        let actual = head;
        while (actual.nextNode && actual.nextNode.nextNode) {
            actual = actual.nextNode;
        }
        actual.nextNode = null;
    }

 
    function contains(value) {
        let actual = head;
        while (actual) {
            if (actual.value === value) return true;
            actual = actual.nextNode;
        }
        return false;
    }

  
    function find(value) {
        let actual = head;
        let i = 0;
        while (actual) {
            if (actual.value === value) return i;
            actual = actual.nextNode;
            i++;
        }
        return "No se encontro la persona";
    }

   
    function toString() {
        let actual = head;
        let resultado = '';
        while (actual) {
            resultado += `( ${actual.value} ) -> `;
            actual = actual.nextNode;
        }
        resultado += 'null';
        return resultado;
    }

    return {
        append,
        prepend,
        size,
        head: getHead,
        tail,
        at,
        pop,
        contains,
        find,
        toString
    };
}

let  pruebaLista= crearListaEnlazada();


//personas
pruebaLista.append("Samuel");
pruebaLista.prepend("Nicolas");
pruebaLista.prepend("Juan")
pruebaLista.append("Laura")
pruebaLista.append("Valentina");
pruebaLista.append("Carlos");
pruebaLista.append("Miguel");
pruebaLista.append("Karen");



console.log(pruebaLista.size());
console.log(pruebaLista.toString());





