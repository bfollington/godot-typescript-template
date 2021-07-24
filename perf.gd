extends Node2D


# Declare member variables here. Examples:
# var a = 2
# var b = "text"


# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.

func _input(event):
	if (event.is_action_pressed('ui_left')):
		var before = OS.get_ticks_msec()
		var lst = []
		for i in range(0, 100000):
			lst.append(i)
		var after = OS.get_ticks_msec()
		print('gdscript took ' + str(after - before) + ' ms')
		

# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass
