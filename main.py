velocidad = 70
maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, velocidad)
if velocidad == 70:
    basic.show_leds("""
        # . . . #
                # # . # .
                # # # . .
                # # # # .
                # # # # #
    """)