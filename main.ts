let x = 0
while (true) {
    if (input.buttonA.isPressed()) {
        light.setPixelColor(x, light.rgb(255, 0, 255))
        pause(300)
        x = x + 1
    }
    
    if (input.buttonB.isPressed()) {
        light.setPixelColor(x - 1, light.rgb(0, 0, 0))
        pause(300)
        x = x - 1
    }
    
    if (x > 10) {
        x = 10
    }
    
    if (x < 0) {
        x = 0
    }
    
}
