# ecommerce

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### İSTENEN

Login kısmında Validation Yapılmalı(This Field Required vs),
Forgot Password için herhangi bir aksiyon gerekli değil, sadece popup yapılması ve toast/popup message verilmesi yeterli

Her kullanıcının Basket'i ayrı tutulmalı(Kullanıcılar User.js üzerinden okunmalı. 3 tane yeterli olacaktır.)

Productlar ve Category'ler uygulama kapandıgı zaman Silinmemeli, (Yeni Eklendiği zaman Category ve Product'lar yenilenmeli)

Category'ler uygulama acıldıgında 1 kere kaynaktan çekilmeli, daha sonrasında cache/store üzerinden okunmalı

Product'lar her category'e tıklandıgında bir kere çekilmeli, ikinci kere aynı Category seçildiğinde
degistiğinde cache/store üzerinden Okunmalı

Basket Uygulama kapandıgı zaman silinmemeli, Session hatırlanmalı.

Complete Purchase yapıldıktan sonra kullanıcının Basket'ı temizlenmeli.

Side Menu (Category Menusu) Component yapısında Olmalı, Product ve Category ekleme sayfaları ayrı olmalı.

Basket Component Olmalı.

Üst Menü (Navigation) Component Olmalı

Uygulama Single Page App olarak inşa edilmeli.
