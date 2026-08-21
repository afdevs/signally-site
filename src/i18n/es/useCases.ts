import type { UseCases } from '../fr/useCases';

export const useCases = {
  meta: {
    title: 'Casos de uso — TI, marketing y RR. HH. en torno a la firma de correo',
    description:
      'Tres áreas, tres problemas, una sola interfaz: cero tickets para TI, un canal dirigible para marketing y una incorporación inmediata para RR. HH.',
  },

  hero: {
    eyebrow: 'Casos de uso',
    title: 'Tres áreas, tres problemas, una sola solución, una sola interfaz.',
    lede:
      'La firma de correo es el único activo de comunicación que TI, marketing y RR. HH. usan a diario — y que nadie dirige de verdad.',
  },

  roles: [
    {
      tag: 'TI',
      title: 'Dejar de ser el departamento de las firmas',
      text:
        'Cada incorporación, cada salida y cada cambio de cargo abre un ticket. Multiplicado por tu rotación, consume mucho tiempo. Con Signally todo está automatizado y es transparente para los usuarios.',
      columns: [
        {
          label: 'LO QUE GANAS',
          items: [
            'Cero tickets de firma',
            'Sincronización automática del directorio',
            'Despliegue sin regla de transporte ni conector',
            'Registro de auditoría y roles de administrador',
          ],
        },
        {
          label: 'LO QUE ASEGURAS',
          items: [
            'Datos alojados en la Unión Europea',
            'Ningún correo leído ni de paso por nosotros',
            'Envío siempre desde tu propio tenant',
            'Avisos legales bloqueados',
          ],
        },
      ],
    },
    {
      tag: 'MARKETING / COMUNICACIÓN',
      title: 'Recuperar un canal que ya estás pagando',
      text:
        'Tus empleados envían cientos de miles de correos al año. Sin una herramienta, ninguno lleva tu mensaje del momento.',
      columns: [
        {
          label: 'LO QUE DIRIGES',
          items: [
            'Coherencia de marca en el 100 % de los envíos',
            'Campañas de banners planificadas',
            'Segmentación por equipo, marca o país',
            'Estadísticas de clics por campaña',
          ],
        },
        {
          label: 'SIN DEPENDER DE TI',
          items: [
            'Creas el banner',
            'Eliges la audiencia',
            'Programas las fechas',
            'Mides el resultado',
          ],
        },
      ],
    },
    {
      tag: 'RR. HH. / OFFICE MANAGEMENT',
      title: 'Una persona recién incorporada lista desde su primer correo',
      text:
        'La firma forma parte del kit de incorporación, igual que la tarjeta de acceso y el portátil. No debería exigirle ninguna gestión.',
      columns: [
        {
          label: 'INCORPORACIÓN',
          items: [
            'Firma lista en cuanto se crea la cuenta',
            'Ningún tutorial que enviar',
            'Actualización automática en caso de movilidad interna',
          ],
        },
        {
          label: 'MARCA EMPLEADORA',
          items: [
            'Banners de selección en toda la plantilla',
            'Difusión de las novedades internas',
            'Retirada inmediata cuando alguien se marcha',
          ],
        },
      ],
    },
  ],

  cta: {
    title: 'Mira Signally sobre tu propia organización',
    text: 'Veinte minutos de demostración: tu directorio, tu plantilla, tu primera campaña.',
    secondaryLabel: 'Reservar una demo',
  },
} satisfies UseCases;
