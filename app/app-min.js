

const appbg = new SpeRuntime.Application();
appbg.start('app/imgs/bg/scene.json');
//appbg.start('app/imgs/cedula/scene.json');
//const appbg2 = new SpeRuntime.Application();
//appbg2.start('app/imgs/cedula/scene.json');


var app = new Vue({
    el: '#app',
    data () {
        return {
            w3d: 1080,
            h3d: 768,
            identificas: [
                'Sólo me falta <strong>tramitar mi cédula profesional</strong>',
                'Terminé la carrera, <strong>pero no me titulé</strong>',
                '<strong>Inicié una carrera,</strong> pero no la culminé',
                'Tengo un título como técnico superior, pero <strong>necesito mi título</strong> y cédula profesional',
                '<strong>Tengo la experiencia,</strong> pero no tengo un título y cédula profesional',
                'No he iniciado una carrera, pero <strong>requiero un título</strong> y cédula profesional',
            ],
            pasos: [
                ['Contáctanos'],
                ['Expón tu caso'],
                ['Recibirás una o varias opciones', ' para lograr la obtención de tu Título y Cédula Profesional'],
                ['Se pone en marcha el plan'],
                ['Listo, en tiempo récord obtendrás tu Título y Cédula Profesional']
            ],
            oferta: {
                licenciaturas: [
                    'DERECHO.', 
                    'CONTADURÍA PÚBLICA',
                    'ADMINISTRACIÓN DE EMPRESAS',
                    'INGENIERÍA EN SISTEMAS COMPUTACIONALES',
                    'CIENCIAS DE LA COMUNICACIÓN',
                    'MERCADOTECNIA',
                    'ODONTOLOGÍA',
                    'GASTRONOMÍA',
                    'CIENCIAS DE LA EDUCACIÓN',
                    'CRIMINOLOGÍA',
                    'PSICOLOGÍA',
                    'TRABAJO SOCIAL',
                    'PEDAGOGÍA',
                ],
                maestrias: [
                    'ADMINISTRACIÓN DE NEGOCIOS',
                    'ADMINISTRACIÓN PÚBLICA',
                    'CIENCIAS PENALES',
                    'COMERCIALIZACIÓN Y DESARROLLO DE MERCADOS',
                    'DERECHO CIVIL',
                    'DIRECCIÓN DE TECNOLOGÍAS DE LA INFORMACIÓN',
                    'EDUCACIÓN',
                    'FINANZAS',
                    'IMPUESTOS CON ENFOQUE ESTRATÉGICO',
                ],
                doctorados: [
                    'EDUCACIÓN',
                    'DERECHO'
                ]
            }

        }
    },
    mounted () {
        AOS.init()
        console.log('mounted')
    },
    methods: {
        calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
            var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
            return { width: srcWidth*ratio, height: srcHeight*ratio };
        },
        resize3ds() {
            var res = this.calculateAspectRatioFit(1200, 480, window.innerWidth, 6000)
            this.w3d = res.width
            this.h3d = res.height
        }
    },
    created () {
        this.resize3ds()
        window.addEventListener("resize", this.resize3ds);
    },
    mounted () {
        this.$buefy.snackbar.open({
            position: 'is-bottom',
            type: 'is-white',
            indefinite: true,
            message: 'Utilizamos cookies para asegurar la mejor navegación en nuestra web, asumimos que estas de acuerdo aceptando.',
            actionText: 'Cancelar',
            cancelText: 'Aceptar',
            onAction: () => {
                this.$buefy.toast.open({
                    indefinite: true,
                    message: 'Saliendo del sitio',
                    queue: false
                })
                setTimeout(() => {
                    window.location = 'https://google.com'
                }, 1000)
            },
            onCancel: () => {
                console.log('CANCELADO')
            }
        })
    }
})



