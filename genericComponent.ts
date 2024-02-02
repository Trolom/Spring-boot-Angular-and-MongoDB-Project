import { GenericService } from '../Services/generic.service';

export abstract class GenericComponent<T> {
  entityList: T[] = [];
  newEntity: T = {} as T;
  creatingMode: boolean = true;

   initialize() {
    this.getAllEntities();
  }

  abstract getService(): GenericService<T>; // Abstract method to be implemented by subclasses

  getAllEntities() {
    const service = this.getService();
    if (!service) {
      console.error('Service is undefined!');
      return;
    }

   	service.getAll().subscribe(
      (response: T[]) => {
        this.entityList = response;
      }
    );
  }

  deleteEntity(entityId: string) {
    if (confirm(`Are you sure you want to delete this entity with id ${entityId} ?`)) {
      this.getService().delete(entityId).subscribe(
        () => {
          alert('Entity Deleted Successfully');
          window.location.reload();
        }
      );
    }
  }

  createEntity() {
    const newEntityData = { ...this.newEntity };
    this.getService().create(newEntityData).subscribe(
      () => {
        alert('Entity Created Successfully');
        window.location.reload();
      }
    );
  }

  modifyEntity() {
    this.getService().update(this.newEntity).subscribe(
      () => {
        alert('Entity Updated Successfully');
        window.location.reload();
      }
    );
  }

  openModel(entity: T = {} as T) {
    // Your implementation for opening the modal
  }
}
