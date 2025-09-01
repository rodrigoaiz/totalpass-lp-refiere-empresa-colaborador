// Script para manejar campos condicionales en el formulario
document.addEventListener('DOMContentLoaded', function() {
    // Función para manejar el estado del campo "Otro"
    function handleOtroField(selectElement, otroFieldId) {
        const otroField = document.getElementById(otroFieldId);
        
        function toggleOtroField() {
            if (selectElement.value === 'Otro') {
                // Activar el campo
                otroField.disabled = false;
                otroField.required = true;
                otroField.style.opacity = '1';
                otroField.style.cursor = 'text';
                otroField.style.backgroundColor = '';
                otroField.placeholder = 'Especifica tu posición/cargo';
            } else {
                // Desactivar el campo pero mantenerlo visible
                otroField.disabled = true;
                otroField.required = false;
                otroField.value = '';
                otroField.style.opacity = '0.5';
                otroField.style.cursor = 'not-allowed';
                otroField.style.backgroundColor = '#f5f5f5';
                otroField.placeholder = 'Selecciona "Otro" arriba para habilitar este campo';
            }
        }
        
        // Configurar estado inicial (desactivado)
        otroField.disabled = true;
        otroField.style.opacity = '0.5';
        otroField.style.cursor = 'not-allowed';
        otroField.style.backgroundColor = '#f5f5f5';
        otroField.placeholder = 'Selecciona "Otro" arriba para habilitar este campo';
        
        // Escuchar cambios en el select
        selectElement.addEventListener('change', toggleOtroField);
    }
    
    // Aplicar a ambos formularios
    const posicionCargo1 = document.getElementById('posicion_cargo');
    const posicionCargo2 = document.getElementById('posicion_cargo_2');
    
    if (posicionCargo1) {
        handleOtroField(posicionCargo1, 'posicion_cargo_otro');
    }
    
    if (posicionCargo2) {
        handleOtroField(posicionCargo2, 'posicion_cargo_otro_2');
    }
});
