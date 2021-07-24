const map = {
  ui_accept: 'ui_accept' as const,
  ui_select: 'ui_select' as const,
  ui_cancel: 'ui_cancel' as const,
  ui_focus_next: 'ui_focus_next' as const,
  ui_focus_prev: 'ui_focus_prev' as const,
  ui_left: 'ui_left' as const,
  ui_right: 'ui_right' as const,
  ui_up: 'ui_up' as const,
  ui_down: 'ui_down' as const,
}

type INPUT_ACTIONS = keyof typeof map

type InputEvent = {
  as_text: () => string
  is_action_pressed: (action: INPUT_ACTIONS) => boolean
}
