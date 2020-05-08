function Movie_OnStart(){SoundPlay("zeldaslullaby",true);


}

function Frame__0_0(ID){Pause();


}

function Frame__1_0(ID){Pause();


}

function pausa_OnClick(){SoundPlay("boton",false);
VideoPause("video");
}

function pausa_OnRelease(){SoundPlay("boton",false);
VideoResume("video");
}

function sonidovideo_OnClick(){SoundPlay("boton",false);
VideoSetVolume("video",100);
}

function sonidovideo_OnRelease(){SoundPlay("boton",false);
VideoSetVolume("video",0);
}

function botobiramusica_OnClick(){SoundPlay("boton",false);
GotoSceneName("musica");
}

function botobiramusica_OnRelease(){SoundPlay("boton",false);
}

function botonmusica_OnClick(){SoundPlay("boton",false);
SoundStop("zeldaslullaby");

}

function botonmusica_OnRelease(){SoundResume("zeldaslullaby");
SoundPlay("boton",false);
}

function ToggleButton1_OnClick(){SoundPlay("boton",false);
GotoSceneName("Escena1");
}

