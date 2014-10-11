function k2n(key)
{
	switch(key)
	{
		case 90:return 48; // C4
		case 83:return 49; // C#4
		case 88:return 50; // D4
		case 68:return 51; // D#4
		case 67:return 52; // E4
		case 86:return 53; // F4
		case 71:return 54; // F#4
		case 66:return 55; // G4
		case 72:return 56; // G#4
		case 78:return 57; // A4
		case 74:return 58; // A#4
		case 77:return 59; // B4
		case 188:return 60; // C5
		case 76:return 61; // C#5
		case 190:return 62; // D5
		case 187:return 63; // D#5
		case 191:return 64; // E5

		case 81:return 60; // C5
		case 50:return 61; // C#5
		case 87:return 62; // D5
		case 51:return 63; // D#5
		case 69:return 64; // E5
		case 82:return 65; // F5
		case 53:return 66; // F#5
		case 84:return 67; // G5
		case 54:return 68; // G#5
		case 89:return 69; // A5
		case 55:return 70; // A#5
		case 85:return 71; // B5
		case 73:return 72; // C6
		case 57:return 73; // C#6
		case 79:return 74; // D6
		case 48:return 75; // D#6
		case 80:return 76; // E6
		case 192:return 77; // F6
		case 222:return 78; // F#6
		case 219:return 79; // G6

		default:return 0;
	}
}