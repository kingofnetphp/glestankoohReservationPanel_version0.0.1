import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class LoadingBackdropService {
    constructor() { }
    show() {
        const backdropWrapperElement = this.createLoadingBackdropTemplate();
        const bodyElement = document.querySelector('body');
        bodyElement?.appendChild(backdropWrapperElement);
    }
    hide() {
        const backdropWrapperElement = document.querySelector('#loadingBackdrop');
        backdropWrapperElement?.remove();
    }
    createLoadingBackdropTemplate() {
        const element = document.createElement('div');
        element.setAttribute('id', 'loadingBackdrop');
        element.setAttribute('style', `
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      z-index: 999;
      background:radial-gradient(rgb(126 128 136), transparent);
    `);
        element.innerHTML = `
      <div class="backdrop"></div>
      <div class="spinner"> در حال دریافت اطلاعات
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    `;
        return element;
    }
}
LoadingBackdropService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LoadingBackdropService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LoadingBackdropService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LoadingBackdropService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LoadingBackdropService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1iYWNrZHJvcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbGliLXJlZ2lzdGVyLXBhbmVsL3NyYy9saWIvbG9hZGluZy1iYWNrZHJvcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxzQkFBc0I7SUFFakMsZ0JBQWdCLENBQUM7SUFFakIsSUFBSTtRQUNGLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDLDZCQUE2QixFQUFFLENBQUM7UUFDcEUsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxXQUFXLEVBQUUsV0FBVyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNLHNCQUFzQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMxRSxzQkFBc0IsRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRU8sNkJBQTZCO1FBQ25DLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTs7Ozs7Ozs7OztLQVU3QixDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsU0FBUyxHQUFHOzs7Ozs7OztLQVFuQixDQUFDO1FBQ0YsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7bUhBdkNVLHNCQUFzQjt1SEFBdEIsc0JBQXNCLGNBRnJCLE1BQU07MkZBRVAsc0JBQXNCO2tCQUhsQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdCYWNrZHJvcFNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBzaG93KCkge1xyXG4gICAgY29uc3QgYmFja2Ryb3BXcmFwcGVyRWxlbWVudCA9IHRoaXMuY3JlYXRlTG9hZGluZ0JhY2tkcm9wVGVtcGxhdGUoKTtcclxuICAgIGNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgYm9keUVsZW1lbnQ/LmFwcGVuZENoaWxkKGJhY2tkcm9wV3JhcHBlckVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpIHtcclxuICAgIGNvbnN0IGJhY2tkcm9wV3JhcHBlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hZGluZ0JhY2tkcm9wJyk7XHJcbiAgICBiYWNrZHJvcFdyYXBwZXJFbGVtZW50Py5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlTG9hZGluZ0JhY2tkcm9wVGVtcGxhdGUoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvYWRpbmdCYWNrZHJvcCcpO1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxyXG4gICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICBiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudChyZ2IoMTI2IDEyOCAxMzYpLCB0cmFuc3BhcmVudCk7XHJcbiAgICBgKTtcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXJcIj4g2K/YsSDYrdin2YQg2K/YsduM2KfZgdiqINin2LfZhNin2LnYp9iqXHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=