#test code
import psutil


battery = psutil.sensors_battery()
print(battery.percent)