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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1iYWNrZHJvcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbGliLXJlc2Vydi1wYW5lbC9zcmMvbGliL2xvYWRpbmctYmFja2Ryb3Auc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sc0JBQXNCO0lBRWpDLGdCQUFnQixDQUFDO0lBRWpCLElBQUk7UUFDRixNQUFNLHNCQUFzQixHQUFHLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO1FBQ3BFLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsV0FBVyxFQUFFLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTSxzQkFBc0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDMUUsc0JBQXNCLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVPLDZCQUE2QjtRQUNuQyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7Ozs7Ozs7Ozs7S0FVN0IsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLFNBQVMsR0FBRzs7Ozs7Ozs7S0FRbkIsQ0FBQztRQUNGLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7O21IQXZDVSxzQkFBc0I7dUhBQXRCLHNCQUFzQixjQUZyQixNQUFNOzJGQUVQLHNCQUFzQjtrQkFIbEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQmFja2Ryb3BTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgc2hvdygpIHtcclxuICAgIGNvbnN0IGJhY2tkcm9wV3JhcHBlckVsZW1lbnQgPSB0aGlzLmNyZWF0ZUxvYWRpbmdCYWNrZHJvcFRlbXBsYXRlKCk7XHJcbiAgICBjb25zdCBib2R5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGJvZHlFbGVtZW50Py5hcHBlbmRDaGlsZChiYWNrZHJvcFdyYXBwZXJFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGhpZGUoKSB7XHJcbiAgICBjb25zdCBiYWNrZHJvcFdyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvYWRpbmdCYWNrZHJvcCcpO1xyXG4gICAgYmFja2Ryb3BXcmFwcGVyRWxlbWVudD8ucmVtb3ZlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUxvYWRpbmdCYWNrZHJvcFRlbXBsYXRlKCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdsb2FkaW5nQmFja2Ryb3AnKTtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcclxuICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgYmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQocmdiKDEyNiAxMjggMTM2KSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgYCk7XHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImJhY2tkcm9wXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyXCI+INiv2LEg2K3Yp9mEINiv2LHbjNin2YHYqiDYp9i32YTYp9i52KfYqlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbn1cclxuIl19