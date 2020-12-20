x = 0
while True:
    if input.button_a.is_pressed():
        light.set_pixel_color(x, light.rgb(255,0,255))
        pause (300)
        x = x+1
    if input.button_b.is_pressed():
        light.set_pixel_color(x - 1 , light.rgb(0,0,0))
        pause(300)
        x = x - 1
    if x > 10:
        x = 10
    if x < 0:
        x = 0