---
sidebar_position: 2
---

# Pug

To enable [**pug**](https://pugjs.org) support make use of the `viewEngine` option inside your `I18nModule`.

```diff title="src/app.module.ts"
  I18nModule.forRoot({
    fallbackLanguage: 'en',
    loaders: [
      new I18nJsonLoader({
        path: path.join(__dirname, '/i18n/'),
      }),
    ],
+   viewEngine: 'pug'
  })
```

## Example usage

Let's try to do some translations with pug templates.

```json title="src/i18n/en/test.json"
{
  "HELLO": "Hello {username}"
}
```

```typescript title="src/app.controller.ts"
@Controller('Test')
export class TestController {
  @Get('/')
  @Render('page')
  index(): any {
    return { username: 'John' };
  }
}
```

```pug title="src/view/page.pug"
h1 #{t('test.HELLO', i18nLang, {username: username} )}
```

:::caution

The second parameter `i18nLang` is the current language. There is no way of passing this to `@softkit/i18n` automatically. So you have to pass it manually.

:::

:::tip

The third argument is optional. This is only needed if you want to pass along arguments to your translations.

:::

### Result

<code>
  <h1>Hello John</h1>
</code>
