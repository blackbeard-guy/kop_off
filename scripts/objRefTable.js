const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Bullet,
		C3.Behaviors.Flash,
		C3.Behaviors.Pin,
		C3.Plugins.Text,
		C3.Behaviors.Fade,
		C3.Plugins.AJAX,
		C3.Plugins.Arr,
		C3.Plugins.Touch,
		C3.Plugins.AdvancedRandom,
		C3.Behaviors.MoveTo,
		C3.Plugins.TiledBg,
		C3.Behaviors.Tween,
		C3.Behaviors.Sin,
		C3.Behaviors.destroy,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Behaviors.Pin.Acts.PinByImagePoint,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Behaviors.MoveTo.Acts.MoveToPosition,
		C3.Behaviors.Fade.Acts.StartFade,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.AJAX.Acts.RequestFile,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.AdvancedRandom.Acts.CreateProbabilityTable,
		C3.Plugins.AdvancedRandom.Acts.AddProbabilityEntry,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Text.Acts.SetPos,
		C3.Plugins.AdvancedRandom.Exps.Weighted,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.Arr.Cnds.ArrForEach,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.Arr.Acts.JSONLoad,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Text.Acts.Destroy,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.IsOnScreen,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Cnds.CompareOpacity,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Text.Cnds.CompareText,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Cnds.CompareY,
		C3.Plugins.Text.Cnds.PickDistance,
		C3.Plugins.Text.Exps.X,
		C3.Plugins.Text.Cnds.OnCreated,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Behaviors.MoveTo.Acts.MoveToObject,
		C3.Behaviors.Bullet.Acts.SetEnabled,
		C3.Plugins.Text.Acts.SetOpacity,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Sprite.Acts.MoveToLayer,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Exps.ImagePointX,
		C3.Plugins.Sprite.Exps.ImagePointY,
		C3.Plugins.Text.Acts.MoveToTop,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Text.Acts.TypewriterText,
		C3.Plugins.Text.Acts.SetEffectEnabled,
		C3.Behaviors.Sin.Acts.SetEnabled,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.TiledBg.Acts.SetWidth,
		C3.Plugins.TiledBg.Exps.Width,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.System.Exps.min,
		C3.Plugins.System.Exps.max,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Cnds.OnAnyAnimFinished
	];
};
self.C3_JsPropNameTable = [
	{Bullet: 0},
	{ground: 0},
	{Flash: 0},
	{Fox: 0},
	{ground_rocks1: 0},
	{rocks_tunnel_: 0},
	{ground2: 0},
	{Pin: 0},
	{mark: 0},
	{mark2: 0},
	{tunnel1: 0},
	{tunnel2: 0},
	{Example1Button: 0},
	{box1: 0},
	{header: 0},
	{Inventory: 0},
	{mask: 0},
	{ground_rocks2: 0},
	{Cooper: 0},
	{junk: 0},
	{junk2: 0},
	{Fade: 0},
	{ItemsText: 0},
	{Sprite: 0},
	{Чистота_спрайт: 0},
	{Счастье_спрайт: 0},
	{Сытость_спрайт: 0},
	{Здоровье_спрайт: 0},
	{Group4: 0},
	{Sprite2: 0},
	{Frame: 0},
	{Group5: 0},
	{EventButton1: 0},
	{tool: 0},
	{Small_frame: 0},
	{Middle_frame: 0},
	{Button_continue: 0},
	{чистота: 0},
	{счастье: 0},
	{сытость: 0},
	{здоровье: 0},
	{Event_line: 0},
	{Вууз: 0},
	{Deep_txt: 0},
	{Event_txt: 0},
	{AJAX: 0},
	{Norm_Array: 0},
	{Touch: 0},
	{block: 0},
	{mask2: 0},
	{Rare_Array: 0},
	{Legend_Array: 0},
	{TextRandom: 0},
	{AdvancedRandom: 0},
	{Event_stat_txt: 0},
	{Чистота_спрайт2: 0},
	{Счастье_спрайт2: 0},
	{Сытость_спрайт2: 0},
	{Здоровье_спрайт2: 0},
	{Gold: 0},
	{Iron: 0},
	{Silver: 0},
	{Lead: 0},
	{EventButton2: 0},
	{Button_continue2: 0},
	{Battle_BG: 0},
	{MoveTo: 0},
	{Enemy1: 0},
	{Tween: 0},
	{TiledBackground: 0},
	{icon: 0},
	{load32_: 0},
	{Мощн_кирки: 0},
	{Shadow: 0},
	{Hunger_button: 0},
	{Happiness_button: 0},
	{Sine: 0},
	{Pickaxe_Power: 0},
	{Monster_Power: 0},
	{Hunger_baff_txt: 0},
	{Happiness_baff_txt: 0},
	{Мощн_кирки2: 0},
	{Happiness_baff_count: 0},
	{Hunger_baff_count: 0},
	{tunnel: 0},
	{rocks: 0},
	{DestroyOutsideLayout: 0},
	{ItemsFam: 0},
	{Event_fam: 0},
	{Digging: 0},
	{Event_stats: 0},
	{Stat_txt: 0},
	{EventUI: 0},
	{AnimCount: 0},
	{JunkAnimCount1: 0},
	{JunkAnimCount2: 0},
	{ItemAnimCount: 0},
	{Deep: 0},
	{Chance: 0},
	{pause: 0},
	{EventStat: 0},
	{Purity: 0},
	{Hunger: 0},
	{Happiness: 0},
	{Health: 0},
	{Choice: 0},
	{FirstTime: 0},
	{Reward1Y: 0},
	{Reward2Y: 0},
	{PickaxePower: 0},
	{EnemyPower: 0},
	{BattleReward: 0},
	{Touched: 0},
	{Happin_baff_count: 0},
	{EventPush: 0},
	{EnemyHPmax: 0},
	{EnemyHP: 0}
];

self.InstanceType = {
	ground: class extends self.ISpriteInstance {},
	Fox: class extends self.ISpriteInstance {},
	ground_rocks1: class extends self.ISpriteInstance {},
	rocks_tunnel_: class extends self.ISpriteInstance {},
	ground2: class extends self.ISpriteInstance {},
	mark: class extends self.ISpriteInstance {},
	mark2: class extends self.ISpriteInstance {},
	tunnel1: class extends self.ISpriteInstance {},
	tunnel2: class extends self.ISpriteInstance {},
	Example1Button: class extends self.ISpriteInstance {},
	box1: class extends self.ISpriteInstance {},
	header: class extends self.ISpriteInstance {},
	Inventory: class extends self.ISpriteInstance {},
	mask: class extends self.ISpriteInstance {},
	ground_rocks2: class extends self.ISpriteInstance {},
	Cooper: class extends self.ISpriteInstance {},
	junk: class extends self.ISpriteInstance {},
	junk2: class extends self.ISpriteInstance {},
	ItemsText: class extends self.ITextInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Чистота_спрайт: class extends self.ISpriteInstance {},
	Счастье_спрайт: class extends self.ISpriteInstance {},
	Сытость_спрайт: class extends self.ISpriteInstance {},
	Здоровье_спрайт: class extends self.ISpriteInstance {},
	Group4: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Frame: class extends self.ISpriteInstance {},
	Group5: class extends self.ISpriteInstance {},
	EventButton1: class extends self.ISpriteInstance {},
	tool: class extends self.ISpriteInstance {},
	Small_frame: class extends self.ISpriteInstance {},
	Middle_frame: class extends self.ISpriteInstance {},
	Button_continue: class extends self.ITextInstance {},
	чистота: class extends self.ITextInstance {},
	счастье: class extends self.ITextInstance {},
	сытость: class extends self.ITextInstance {},
	здоровье: class extends self.ITextInstance {},
	Event_line: class extends self.ISpriteInstance {},
	Deep_txt: class extends self.ITextInstance {},
	Event_txt: class extends self.ITextInstance {},
	AJAX: class extends self.IInstance {},
	Norm_Array: class extends self.IArrayInstance {},
	Touch: class extends self.IInstance {},
	block: class extends self.ISpriteInstance {},
	mask2: class extends self.ISpriteInstance {},
	Rare_Array: class extends self.IArrayInstance {},
	Legend_Array: class extends self.IArrayInstance {},
	TextRandom: class extends self.ITextInstance {},
	AdvancedRandom: class extends self.IInstance {},
	Event_stat_txt: class extends self.ITextInstance {},
	Чистота_спрайт2: class extends self.ISpriteInstance {},
	Счастье_спрайт2: class extends self.ISpriteInstance {},
	Сытость_спрайт2: class extends self.ISpriteInstance {},
	Здоровье_спрайт2: class extends self.ISpriteInstance {},
	Gold: class extends self.ISpriteInstance {},
	Iron: class extends self.ISpriteInstance {},
	Silver: class extends self.ISpriteInstance {},
	Lead: class extends self.ISpriteInstance {},
	EventButton2: class extends self.ISpriteInstance {},
	Button_continue2: class extends self.ITextInstance {},
	Battle_BG: class extends self.ISpriteInstance {},
	Enemy1: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	icon: class extends self.ISpriteInstance {},
	load32_: class extends self.ISpriteInstance {},
	Мощн_кирки: class extends self.ITextInstance {},
	Shadow: class extends self.ISpriteInstance {},
	Hunger_button: class extends self.ISpriteInstance {},
	Happiness_button: class extends self.ISpriteInstance {},
	Pickaxe_Power: class extends self.ITextInstance {},
	Monster_Power: class extends self.ITextInstance {},
	Hunger_baff_txt: class extends self.ITextInstance {},
	Happiness_baff_txt: class extends self.ITextInstance {},
	Мощн_кирки2: class extends self.ITextInstance {},
	Happiness_baff_count: class extends self.ITextInstance {},
	Hunger_baff_count: class extends self.ITextInstance {},
	tunnel: class extends self.ISpriteInstance {},
	rocks: class extends self.ISpriteInstance {},
	ItemsFam: class extends self.ISpriteInstance {},
	Event_fam: class extends self.ITextInstance {},
	Digging: class extends self.ISpriteInstance {},
	Event_stats: class extends self.ISpriteInstance {},
	Stat_txt: class extends self.ITextInstance {},
	EventUI: class extends self.ISpriteInstance {}
}