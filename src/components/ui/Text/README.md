# Text Components

## ObviaBold

Komponen `ObviaBold` adalah komponen teks dengan gaya bold yang dapat digunakan untuk menampilkan teks dengan penekanan.

### Penggunaan

```tsx
import { ObviaBold } from '@components/ui';

// Contoh penggunaan dasar
<ObviaBold>Ini adalah teks bold</ObviaBold>

// Dengan ukuran berbeda
<ObviaBold size="xs">Teks kecil bold</ObviaBold>
<ObviaBold size="md">Teks sedang bold</ObviaBold>
<ObviaBold size="xl">Teks besar bold</ObviaBold>

// Dengan gaya tambahan
<ObviaBold style={{ color: 'red' }}>Teks bold merah</ObviaBold>
```

### Props

| Prop | Tipe | Default | Deskripsi |
|------|------|---------|------------|
| size | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl' \| 'xxxl' | 'md' | Ukuran teks |
| style | StyleProp<TextStyle> | - | Gaya tambahan untuk teks |

Komponen ini juga mendukung semua props dari komponen Text bawaan React Native.

## ObviaRegular

Komponen `ObviaRegular` adalah komponen teks dengan font Obvia Regular yang dapat digunakan untuk menampilkan teks dengan gaya Obvia standar.

### Penggunaan

```tsx
import { ObviaRegular } from '@components/ui';

// Contoh penggunaan dasar
<ObviaRegular>Ini adalah teks Obvia Regular</ObviaRegular>

// Dengan ukuran berbeda
<ObviaRegular size="xs">Teks kecil Obvia</ObviaRegular>
<ObviaRegular size="md">Teks sedang Obvia</ObviaRegular>
<ObviaRegular size="xl">Teks besar Obvia</ObviaRegular>

// Dengan gaya tambahan
<ObviaRegular style={{ color: 'blue' }}>Teks Obvia biru</ObviaRegular>
```

### Props

| Prop | Tipe | Default | Deskripsi |
|------|------|---------|------------|
| size | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl' \| 'xxxl' | 'md' | Ukuran teks |
| style | StyleProp<TextStyle> | - | Gaya tambahan untuk teks |

Komponen ini juga mendukung semua props dari komponen Text bawaan React Native.