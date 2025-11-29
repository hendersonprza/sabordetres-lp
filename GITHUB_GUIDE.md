# 📚 Guía para Subir el Repositorio a GitHub

Esta guía te ayudará a subir tu proyecto "Sabor de Tres" a GitHub paso a paso.

## 📋 Pre-requisitos

Antes de comenzar, asegúrate de tener:

1. ✅ Una cuenta en [GitHub](https://github.com)
2. ✅ Git instalado en tu computadora
   - Para verificar, abre PowerShell y ejecuta: `git --version`
   - Si no lo tienes, descárgalo de: https://git-scm.com/download/win

## 🚀 Paso 1: Verificar el Estado de tu Repositorio Local

Abre PowerShell en la carpeta del proyecto y verifica el estado:

```powershell
cd "C:\Users\stackpc\Desktop\sabordetres-lp"
git status
```

## 📝 Paso 2: Agregar Archivos al Repositorio

Si hay archivos sin seguimiento (untracked), agrégalos:

```powershell
# Agregar todos los archivos
git add .

# O agregar archivos específicos
git add README.md .gitignore LICENSE
git add index.html style.css script.js
git add assets/*
```

## 💾 Paso 3: Hacer el Primer Commit

Crea un commit con tus cambios:

```powershell
git commit -m "Initial commit: Sabor de Tres landing page"
```

Si es tu primera vez usando Git, puede que necesites configurar tu identidad:

```powershell
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

## 🌐 Paso 4: Crear el Repositorio en GitHub

### Opción A: Desde la Web (Recomendado)

1. Ve a [GitHub](https://github.com)
2. Haz clic en el botón **"+"** en la esquina superior derecha
3. Selecciona **"New repository"**
4. Configura tu repositorio:
   - **Repository name**: `sabordetres-lp` (o el nombre que prefieras)
   - **Description**: "Landing page moderna para Sabor de Tres - Panadería y Pizzas"
   - **Public** o **Private**: Elige según tu preferencia
   - ⚠️ **NO marques** "Initialize this repository with a README" (ya tienes uno)
5. Haz clic en **"Create repository"**

### Opción B: Usando GitHub CLI (Avanzado)

Si tienes GitHub CLI instalado:

```powershell
gh repo create sabordetres-lp --public --source=. --remote=origin --push
```

## 🔗 Paso 5: Conectar tu Repositorio Local con GitHub

Después de crear el repositorio en GitHub, copia la URL que aparece (algo como `https://github.com/TU_USUARIO/sabordetres-lp.git`).

Luego, en PowerShell:

```powershell
# Si usaste la Opción A, ejecuta esto:
git remote add origin https://github.com/TU_USUARIO/sabordetres-lp.git

# Verifica que se agregó correctamente
git remote -v
```

## ⬆️ Paso 6: Subir tus Archivos a GitHub

Ahora sube tu código:

```powershell
# Renombrar la rama a 'main' si es necesario
git branch -M main

# Subir los archivos
git push -u origin main
```

Si es la primera vez, GitHub te pedirá autenticación:
- **Usuario**: Tu nombre de usuario de GitHub
- **Contraseña**: Usa un **Personal Access Token** (no tu contraseña)

### 🔑 Crear un Personal Access Token

1. Ve a GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Clic en "Generate new token" → "Generate new token (classic)"
3. Dale un nombre descriptivo (ej: "Sabor de Tres Project")
4. Selecciona el scope **"repo"** (completo)
5. Clic en "Generate token"
6. **¡COPIA EL TOKEN!** No podrás verlo de nuevo
7. Usa este token como contraseña cuando Git te lo pida

## ✅ Paso 7: Verificar que Todo se Subió Correctamente

1. Ve a tu repositorio en GitHub: `https://github.com/TU_USUARIO/sabordetres-lp`
2. Deberías ver todos tus archivos
3. El README.md se mostrará automáticamente en la página principal

## 🌟 Paso 8: Activar GitHub Pages (Opcional pero Recomendado)

Para publicar tu sitio web gratis:

1. En tu repositorio, ve a **Settings** → **Pages**
2. En "Source", selecciona:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
3. Haz clic en **Save**
4. Espera unos minutos
5. Tu sitio estará disponible en: `https://TU_USUARIO.github.io/sabordetres-lp`

## 🔄 Comandos Útiles para el Futuro

### Actualizar tu repositorio después de hacer cambios:

```powershell
# Ver qué archivos cambiaron
git status

# Agregar los cambios
git add .

# Hacer commit
git commit -m "Descripción de los cambios"

# Subir a GitHub
git push
```

### Ver el historial de commits:

```powershell
git log --oneline
```

### Crear una nueva rama para experimentar:

```powershell
git checkout -b nueva-funcionalidad
```

### Volver a la rama principal:

```powershell
git checkout main
```

## 🐛 Solución de Problemas Comunes

### Error: "remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/sabordetres-lp.git
```

### Error: "failed to push some refs"
```powershell
# Si el repositorio remoto tiene cambios que no tienes localmente
git pull origin main --rebase
git push origin main
```

### Error: "fatal: not a git repository"
```powershell
# Inicializar el repositorio
git init
```

## 📞 ¿Necesitas Ayuda?

- 📖 [Documentación oficial de Git](https://git-scm.com/doc)
- 📖 [Guías de GitHub](https://guides.github.com/)
- 💬 [GitHub Community](https://github.community/)

## 🎉 ¡Felicidades!

Has subido exitosamente tu proyecto a GitHub. Ahora puedes:
- ✅ Compartir tu código con otros
- ✅ Colaborar con desarrolladores
- ✅ Tener un backup en la nube
- ✅ Usar GitHub Pages para alojar tu sitio
- ✅ Mostrar tu trabajo en tu portafolio

---

💡 **Consejo Pro**: Actualiza el README.md con la URL real de tu sitio una vez que lo despliegues en GitHub Pages.
